import User from '@/app/_lib/models/User';
import { defaultRegisterFormSchemaShape } from '@/app/_lib/yup-schemas/register';
import connectDb from '@/app/config/db';
import * as bcrypt from 'bcrypt';
import * as yup from 'yup';

export const POST = async (request: Request) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        message: `Method ${request.method} Not Allowed`,
      }),
      {
        status: 405,
      }
    );
  }

  try {
    const body = await request.json();
    const isValid = await yup
      .object()
      .shape(defaultRegisterFormSchemaShape)
      .validate(body);

    if (!isValid) {
      return new Response(
        JSON.stringify({ message: 'invalid_credentials_type' }),
        {
          status: 400,
        }
      );
    }

    const { email, firstName, lastName, password, role } = body;

    await connectDb();
    const user = await User.findOne({
      'contactInformation.emailAddress': email,
    }).exec();

    if (user) {
      return new Response(JSON.stringify({ message: 'user_already_exists' }), {
        status: 400,
      });
    } else {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        fullName: `${firstName} ${lastName}`,
        contactInformation: {
          emailAddress: email,
        },
        password: hashedPassword,
        role,
      });

      await newUser.save();

      return new Response(
        JSON.stringify({ message: 'user_created_successfully' }),
        { status: 201 }
      );
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
};
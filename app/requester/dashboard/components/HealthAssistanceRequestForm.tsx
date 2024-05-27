'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

interface IFormInputs {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    healthIssueDescription: string;
    requestedAmount: number;
    // medicalDocuments: FileList | null;
    doctorContact: string;
    estimatedSurgeryDate: string;
    preferredHospital: string;
}

const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    address: yup.string().required('Address is required'),
    healthIssueDescription: yup.string().required('Description of the health issue is required'),
    requestedAmount: yup.number().positive('Amount must be positive').required('Requested amount is required'),
    // medicalDocuments: yup
    //     .mixed()
    //     .nullable()
    //     .test('fileRequired', 'Medical documents are required', (value) => {
    //         return value && value.length > 0;
    //     }),
    doctorContact: yup.string().required("Doctor's contact information is required"),
    estimatedSurgeryDate: yup.string().required('Estimated surgery date is required').typeError('Invalid date'),
    preferredHospital: yup.string().required('Preferred hospital is required')
});

const HealthAssistanceRequestForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
    };

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue('medicalDocuments', event.target.files);
    // };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom color={'black'}>
                Health Assistance Request Form
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        {...register('fullName')}
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('email')}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('phoneNumber')}
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('address')}
                        label="Address"
                        variant="outlined"
                        fullWidth
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('healthIssueDescription')}
                        label="Description of the Health Issue"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        error={!!errors.healthIssueDescription}
                        helperText={errors.healthIssueDescription?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('requestedAmount')}
                        label="Requested Amount"
                        variant="outlined"
                        type="number"
                        fullWidth
                        error={!!errors.requestedAmount}
                        helperText={errors.requestedAmount?.message}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <Button variant="contained" component="label">
                        Upload Medical Documents
                        <input type="file" multiple hidden onChange={handleFileChange} />
                    </Button>
                    {errors.medicalDocuments && (
                        <Typography color="error">{errors.medicalDocuments.message}</Typography>
                    )}
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        {...register('doctorContact')}
                        label="Doctor's Contact Information"
                        variant="outlined"
                        fullWidth
                        error={!!errors.doctorContact}
                        helperText={errors.doctorContact?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('estimatedSurgeryDate')}
                        label="Estimated Surgery Date"
                        variant="outlined"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        error={!!errors.estimatedSurgeryDate}
                        helperText={errors.estimatedSurgeryDate?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...register('preferredHospital')}
                        label="Preferred Hospital"
                        variant="outlined"
                        fullWidth
                        error={!!errors.preferredHospital}
                        helperText={errors.preferredHospital?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit Request
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HealthAssistanceRequestForm;

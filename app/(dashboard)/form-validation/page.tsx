"use client";

import React from "react";
import ValidateForm from "@/app/(dashboard)/form-validation/validate-form";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";

const FormValidation = () => {
    return (
        <>
            <DashboardBreadcrumb title="Input Layout" text="Input Layout" />

            <ValidateForm />

        </>
    );
};

export default FormValidation;

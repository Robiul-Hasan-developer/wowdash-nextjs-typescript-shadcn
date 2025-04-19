import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const Login = () => {
    return (
        <div className='p-10'>
            <h1 className='mb-4'>This is Login page. Go to dashboard page</h1>  
            <Button className='cursor-pointer bg-slate-600 hover:bg-slate-800' asChild>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
        </div>
    );
};

export default Login;
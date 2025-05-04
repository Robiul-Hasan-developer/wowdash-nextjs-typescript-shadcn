import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const ClientPaymentStatus = () => {
    return (
        <Card className="card h-full rounded-lg border-0">
          <CardContent className="card-body p-0">
              <h6 className="mb-2 font-bold text-lg">Client Payment Status</h6>
              <span className="text-sm font-medium text-secondary-light">Weekly Report</span>

              <ul className="flex flex-wrap items-center justify-center mt-8">
                <li className="flex items-center gap-2 me-7">
                  <span className="w-3 h-3 rounded-full bg-success-600"></span>
                  <span className="text-secondary-light text-sm font-medium">Paid: 400</span>
                </li>
                <li className="flex items-center gap-2 me-7">
                  <span className="w-3 h-3 rounded-full bg-info-600"></span>
                  <span className="text-secondary-light text-sm font-medium">Pending: 400</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-warning-600"></span>
                  <span className="text-secondary-light text-sm font-medium">Overdue: 1400</span>
                </li>
              </ul>
              <div className="mt-[60px]">
                <div id="paymentStatusChart" className="margin-16-minus"></div>
              </div>
          </CardContent>
        </Card>
    );
};

export default ClientPaymentStatus;
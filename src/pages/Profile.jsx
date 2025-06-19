import React from 'react';

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">My Profile</h1>
      <p className="text-sm">Username: @example_user</p>
      <p className="text-sm">Total Deposits: 0.00€</p>
      <p className="text-sm">Total Spent: 0.00€</p>
      <p className="text-sm">Referrals: 0</p>
    </div>
  );
}
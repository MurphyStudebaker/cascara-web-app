import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import ls from 'local-storage'

export default function Protected() {
  const user = netlifyIdentity.currentUser();
  console.log({ user });
  
  return (
    <div className="container mt-5">
      <h3>Hey there!</h3>
      <p>
        You are currently logged in as <b>{user.email}</b><br />
        The user profile feature is currently brewing. 
        Come back soon to leave reviews and add your favorite coffee shops!
      </p>
    </div>
  );
}
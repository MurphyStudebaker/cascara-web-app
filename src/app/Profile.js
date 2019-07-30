import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import ls from 'local-storage'
import CoffeeSubmissionForm from './CoffeeSubmissionForm'
import Database from './Database';

export default function Protected() {
  const user = netlifyIdentity.currentUser();
  
  return (
    <div className="">
    <div className="container mt-5">
      <h1 className="title pt-5 giant-text">Hi, {user.user_metadata.full_name}! </h1>
      
      <button className="btn btn-primary mt-3 p-3" type="button" data-toggle="modal" data-target="#submissionModal">
          Add a Coffeeshop
      </button>
      <CoffeeSubmissionForm />
    </div>
    </div>
  );
}
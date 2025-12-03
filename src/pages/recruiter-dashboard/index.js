import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';
import useRoleStore from '../../store/roleStore';

export default function RecruiterDashboard() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    // Set active role and redirect to the introduction tab
    setActiveRole('recruiter-dashboard');
    setActiveTab('recruiter-dashboard', 'introduction');
    history.replace('/recruiter-dashboard/introduction');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}

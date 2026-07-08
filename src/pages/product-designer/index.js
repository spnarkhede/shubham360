import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useRoleStore from '../../store/roleStore';

export default function ProductDesigner() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    setActiveRole('product-designer');
    setActiveTab('product-designer', 'introduction');
    history.replace('/product-designer/introduction');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}
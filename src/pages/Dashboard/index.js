import React, {useEffect} from 'react';

import {createTransaction, createSplitOnGetTransaction} from '../../services/api';

const Dashboard = () => {

  useEffect(() => {
    handleCreateTransaction();
  }, []);
  async function handleCreateTransaction(){
    try{
        const responseCreate = await createTransaction;
        console.log(responseCreate);
        await createSplitOnGetTransaction({id: responseCreate.id});        
    }catch(err){
      throw new Error(err)
    }
    
  }
  
  return (
    <>
      <h1>HOLÁ</h1>
    </>
  );
}

export default Dashboard;
import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions'
import { parseParameter } from 'next/dist/shared/lib/router/utils/route-regex';
import Link from 'next/link';
import React from 'react'

const SingleTaskPage = async ({params}) => {

    const task = await getTask(params.id);
  return (
    <div className='mb-16'>
        <Link href='/tasks' className=' btn btn-accent'> Back to Tasks
        </Link>
        <EditForm task={task}/>
    </div>
  )
}

export default SingleTaskPage
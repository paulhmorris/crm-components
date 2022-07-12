import { Button } from 'components/Button';

export const StatementsTab = () => {
    return (
        <div className='striped'>
            <p>Statements</p>
            <div className='flex flex-row items-center p-6 border-[1px] border-gray-200 border-t-0'>
                <p className='text-blue-200 underline font-bold cursor-pointer'>View 7/1/2022 Invoice</p>
                <Button variant="secondary" className='ml-3'>Record Payment</Button>
                <p className=''>Balance Due $14,420.65</p>
            </div>
            <div className='flex flex-row items-center p-6 border-[1px] border-gray-200 border-t-0'>
                <p className='text-blue-200 underline font-bold cursor-pointer'>View 7/1/2022 Invoice</p>
                <Button variant="secondary" className='ml-3'>Record Payment</Button>
                <p className=''>Balance Due $14,420.65</p>
            </div>
            <div className='flex flex-row items-center p-6 border-[1px] border-gray-200 border-t-0'>
                <p className='text-blue-200 underline font-bold cursor-pointer'>View 7/1/2022 Invoice</p>
                <Button variant="secondary" className='ml-3'>Record Payment</Button>
                <p className=''>Balance Due $14,420.65</p>
            </div>
        </div>
    )
}

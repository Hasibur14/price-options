import PropTypes from 'prop-types';
import Features from '../Features/Features';


const Price = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='flex flex-col bg-blue-500 text-white shadow-2xl rounded-xl p-4  '>
            <h2 className='text-center'>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8 text-orange-300'>{name}</h4>
          <div className='pl-6 flex-grow'> 
          {
                features.map((item, index) => <Features key={index} features={item}></Features>)
            }
          </div>
        <div className='justify-center'>
        <button className='mt-12 bg-gray-500 p-2 rounded-xl w-full hover:bg-orange-300'>Buy Now</button>
        </div>
        </div>
    );
};

Price.PropTypes = {
    option: PropTypes.object
}


export default Price;
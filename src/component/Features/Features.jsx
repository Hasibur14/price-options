import PropTypes from 'prop-types';
import { BsCheckCircleFill } from "react-icons/bs";

const Features = ({features}) => {
    return (
        <div>
           <p className='flex items-center  '> <BsCheckCircleFill className=' text-yellow-500 mr-2'></BsCheckCircleFill>{features}</p>
        </div>
    );
};


Features.PropTypes ={
    features: PropTypes.string
}

export default Features;
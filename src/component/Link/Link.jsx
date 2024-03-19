import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div className='hover:bg-slate-500 p-2 hover:rounded-xl hover:text-white'>
            <li className="mr-6" key={route.id}><a href={`route.path`}>{route.name}</a></li>
        </div>
    );
};


Link.propTypes ={
    route:PropTypes.object
} 

export default Link;
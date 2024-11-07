import { CiBookmark } from 'react-icons/ci';

import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmarks}) => {
    const {title, cover, author_img, author, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4' >
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button 
                    onClick={handleAddToBookmarks}
                    className='ml-2 text-2xl text-red-600'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            {
                hashtags.map((hash, idx) => <div
                key={idx}>
                    <span><a href="">#{hash}</a></span>
                </div>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
import React from 'react';

const RecipePage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
        <h2 className='font-lg italic font-bold'>Lorem Ipsum Dolor</h2>
        <img src="../stew test.jpg" alt="test" className='w-1/2 h-72 rounded-md' />
        <span className='font-lg italic'>By: test</span>
        <span className='font-lg font-bold'> Description </span>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat provident officiis aspernatur quas facere, voluptate quidem beatae incidunt fuga labore ipsum animi corrupti eos nemo iste dolorem ullam voluptates?
        </div>
        <span className='font-lg font-bold'> Ingredients </span>
        <div>
            <ul className='list-[circle] hover:list-disc'>
                <li>test</li>
                <li>test1</li>
                <li>eggs</li>
                <li>milk</li>
            </ul>
        </div>
        <span className='font-lg font-bold'> Steps </span>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat provident officiis aspernatur quas facere, voluptate quidem beatae incidunt fuga labore ipsum animi corrupti eos nemo iste dolorem ullam voluptates?
        </div>

    </div>
  );
};

export default RecipePage;

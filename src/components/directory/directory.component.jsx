import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'birds',
        imageUrl: 'https://source.unsplash.com/random/?parrot',
        id: 1,
        linkUrl: 'birds'
      },
      {
        title: 'reptiles',
        imageUrl: 'https://source.unsplash.com/random/?iguana',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'horses',
        imageUrl: 'https://source.unsplash.com/random/?horse',
        size: 'med',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'dogs',
        imageUrl: 'https://source.unsplash.com/random/?puppy',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'cats',
        imageUrl: 'https://source.unsplash.com/random/?cat',
        size: 'large',
        id: 5,
        linkUrl: ''
      }]
    };
  }

  render() {
    return (
      <div className='dir-men'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} { ...otherSectionProps } />
        ))}
      </div>
    );
  }
}

export default Directory;

//  old way
// <div className='dir-men'>
// {this.state.sections.map(({ title, imageUrl, id, size }) => (
//   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
// ))}
// </div>
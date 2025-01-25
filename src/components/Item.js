import { useState } from 'react';

function Item() {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {/* item content */}
      <button onClick={() => setIsInCart(!isInCart)}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;

import { useState } from "react";

function useCounter() {
    // qual a diferença de um hook para uma função compartilhada?
    // uso de recursos react, por ex: useState, useEffect...
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c +1)
    }

    // retornando um array com 2 indices
    return [count, increment]
}

// arquivo js: usado quando não retornamos HTML
// arquivo jsx: é o formato para HTML misturado com Javascript

export default useCounter;
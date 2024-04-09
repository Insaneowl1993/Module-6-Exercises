import { useState } from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorMessage from './ErrorMessage';

function Bomb() {
    const Bomb = '💥 KABOOM 💥'
    throw new Error(Bomb);

    return <h1>Bomb</h1>
}

function ExplodingBomb() {

    const [exploded, setExploded] = useState(false);

    return (
        <div className="ExplodingBomb componentBox">
            <button onClick={() => setExploded(!exploded)}>Danger: Click to explode bomb!
            </button>
            <ErrorBoundary FallbackComponent={ErrorMessage}>
                {exploded ? <Bomb /> : null}
            </ErrorBoundary>
        </div>
    )
}

export default ExplodingBomb;
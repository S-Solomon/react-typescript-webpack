import './App.scss'
import { useState } from 'react'

export const App: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="app">
            <h1
                className={
                    count > 0 ? 'positive' : count < 0 ? 'negative' : undefined
                }
            >
                {count}
            </h1>
            <div className="button-wrapper">
                <button onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
                <button onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
            </div>
        </div>
    )
}

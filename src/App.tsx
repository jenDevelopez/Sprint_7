import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="wellcome-div">
      <nav>
        <ul>
          <li>
            <Link to="/wellcome">Wellcome</Link>
          </li>
          <li>
            <Link to="/budget">Budgets</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

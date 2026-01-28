export default function Game({title, cover, onRemove}) {
    <div>
        <img src={cover} alt="" />
        <div>
            <h2>{title}</h2>
        </div>
        <button onClick={onRemove}>Remover</button>
        </div>
}
export const Input = (props: InputProps) => {
    const {label, ...inputProps} = props
    return (
        <label className="form-control w-full">
            {label && <div className="label">
                <span className="label-text">{label}</span>
            </div>}
            <input type="text" className="input input-bordered w-full" {...inputProps}/>
        </label>
    )
}
function FlagItem({
    id,
    slug,
    title,
    textColor,
    line1,
    line2,
    line3,
    isActive
}) {
    return (
        <div className={'item item-'+ id + ' ' + slug + (isActive ? ' active' : '')}>
            <div className="line1" style={{backgroundColor: line1}}></div>
            <div className="line2" style={{backgroundColor: line2, color: textColor}}>{title}</div>
            <div className="line3" style={{backgroundColor: line3}}></div>
        </div>
    );
}
export default FlagItem;
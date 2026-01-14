import './Card.css'

const Card = ({Name, ClassInfo, Description}) =>{
    return (
        <>
            <div className="card">
                <div className="Name">
                    Tôi tên: {Name}
                </div>
                <div className="ClassInfo">
                    Học lớp: {ClassInfo}
                </div>
                <div className="Desc">
                    {Description}
                </div>
            </div>
        </>
    );
}

export default Card

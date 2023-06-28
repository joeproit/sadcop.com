import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CopCard = ({ sadcop }) => {
    // Check if sadcop is defined before accessing its properties
    if (!sadcop) {
        return null; // or render a fallback UI
    }

    return (
        <Card>
            <CardImg top width='100%' src={sadcop.image} alt={sadcop.name} />
            <CardImgOverlay>
                <CardTitle>{sadcop.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default CopCard;

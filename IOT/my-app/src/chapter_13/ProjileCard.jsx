

// 14장은 색깔 2개 동시에 올리기 [화면 2개 캡쳐] (dark,light)
import Card from "./Card";

function ProjileCard(props) {
    return (
        <Card title="Inje Lee" backgroundColor="#4ea04e">
            <p>안녕하세요, 임정민입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProjileCard;




// 기말고사는 쓰기도 가능하고, 데이터를 가져와서 read를 할 수 있고... 글도 쓸 수 있다.
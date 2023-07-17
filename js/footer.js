//셋팅
// 버튼에 대한 이벤트 변수
const Button = document.getElementById('showListButton');

// 마우스가 버튼 위로 올라갔을 때 리스트 보이기 ㄱㄱ
function showListBox() {
    const listBox = document.getElementById('listBox');
    const listItems = listBox.querySelectorAll('li'); //idx 7
    listBox.style.display = 'block';
    listItems.forEach((item) => (item.style.opacity = '1'));
}

// 마우스가 버튼에서 벗어났을 때 리스트 사라지게 ㄱㄱ
function hideListBox() {
    //리스트 목록
    const listBox = document.getElementById('listBox');
    const listItems = listBox.querySelectorAll('li');
    listItems.forEach((item) => (item.style.opacity = '0'));
    setTimeout(function () {
        listBox.style.display = 'none';
    }, 10);
}

//버튼 hover 시 메서드 호출
Button.addEventListener('mouseenter', showListBox);
Button.addEventListener('mouseleave', hideListBox);
    
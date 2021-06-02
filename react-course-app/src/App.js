import './App.css';
import React from "react";

const myNews = [
    {
        id: 1,
        author: 'Саша Печкин',
        text: 'В четверг, четвёртого числа...'
    },
    {
        id: 2,
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        id: 3,
        author: 'Max Frontend',
        text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
    },
    {
        id: 4,
        author: 'Гость',
        text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
    }
];

class News extends React.Component {
    render() {
        const { data } = this.props // тоже самое, что и const data = this.props.data
        let newsTemplate
        if (data.length) {
            newsTemplate = data.map(function(item) {
                return (
                    <div key={item.id}>
                        <p className='newsAuthor'>{item.author}:</p>
                        <p className='newsText'>{item.text}</p>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        return (
            <div className='news'>
                {newsTemplate}
                <strong>Всего новостей: {data.length}</strong>
            </div>
        )
    }
}

const App = () => {
    return (
        <News data={myNews}/>
    )
}

export default App;

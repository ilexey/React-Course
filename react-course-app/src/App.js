import './App.css';
import React from "react";

const myNews = [
    
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

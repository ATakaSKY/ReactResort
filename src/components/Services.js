import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';

export default class Services extends Component {

    state = {
        services:[
            {
                icon:<FaCocktail />,
                title:'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, porro non. Vitae voluptas rerum doloribus modi dignissimos cumque aperiam exercitationem quas vero, obcaecati laudantium eius beatae tempore doloremque dolor culpa?'
            },
            {
                icon:<FaHiking />,
                title:'Endless hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, porro non. Vitae voluptas rerum doloribus modi dignissimos cumque aperiam exercitationem quas vero, obcaecati laudantium eius beatae tempore doloremque dolor culpa?'
            },
            {
                icon:<FaShuttleVan />,
                title:'free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, porro non. Vitae voluptas rerum doloribus modi dignissimos cumque aperiam exercitationem quas vero, obcaecati laudantium eius beatae tempore doloremque dolor culpa?'
            },
            {
                icon:<FaBeer />,
                title:'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, porro non. Vitae voluptas rerum doloribus modi dignissimos cumque aperiam exercitationem quas vero, obcaecati laudantium eius beatae tempore doloremque dolor culpa?'
            }
        ]
    }

    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return (
                        <section key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </section>
                       )
                   })}
               </div>
            </section>
        )
    }
}

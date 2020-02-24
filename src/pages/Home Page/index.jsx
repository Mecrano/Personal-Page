import React from 'react';

// Material UI

// Custom Component
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';

const HomePage = () => (
    <>
        <Header />
        <Parallax
            id="home"
            titles={[{ prefix: 'Yo soy ', word: 'Edwin Obando' }, { prefix: 'Yo soy ', word: 'desarrollador' }, { prefix: 'Yo ❤️ ', word: 'Programar' }]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ex elementum lectus vehicula vestibulum. Donec commodo aliquet justo venenatis fermentum. In hac habitasse platea dictumst. Nulla non urna ut arcu auctor ultricies. Pellentesque finibus efficitur egestas. Donec tincidunt mi lorem, vitae placerat erat sagittis sit amet. Nunc leo lectus, fringilla non ipsum commodo, fringilla aliquam ipsum"
            socialNetworks={[
                { id: 'socialNetwork_1', route: 'www.google.com', icon: 'google' },
                { id: 'socialNetwork_2', route: 'www.facebook.com', icon: 'FB' },
                { id: 'socialNetwork_3', route: 'www.instagram.com', icon: 'ig' }]}
        />
        <Parallax
            id="about"
            titles={[{ prefix: 'Yo soy ', word: 'Edwin Obando' }, { prefix: 'Yo soy ', word: 'desarrollador' }, { prefix: 'Yo ❤️ ', word: 'Programar' }]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ex elementum lectus vehicula vestibulum. Donec commodo aliquet justo venenatis fermentum. In hac habitasse platea dictumst. Nulla non urna ut arcu auctor ultricies. Pellentesque finibus efficitur egestas. Donec tincidunt mi lorem, vitae placerat erat sagittis sit amet. Nunc leo lectus, fringilla non ipsum commodo, fringilla aliquam ipsum"
            socialNetworks={[
                { id: 'socialNetwork_1', route: 'www.google.com', icon: 'google' },
                { id: 'socialNetwork_2', route: 'www.facebook.com', icon: 'FB' },
                { id: 'socialNetwork_3', route: 'www.instagram.com', icon: 'ig' }]}
        />
        <Parallax
            id="projects"
            titles={[{ prefix: 'Yo soy ', word: 'Edwin Obando' }, { prefix: 'Yo soy ', word: 'desarrollador' }, { prefix: 'Yo ❤️ ', word: 'Programar' }]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ex elementum lectus vehicula vestibulum. Donec commodo aliquet justo venenatis fermentum. In hac habitasse platea dictumst. Nulla non urna ut arcu auctor ultricies. Pellentesque finibus efficitur egestas. Donec tincidunt mi lorem, vitae placerat erat sagittis sit amet. Nunc leo lectus, fringilla non ipsum commodo, fringilla aliquam ipsum"
            socialNetworks={[
                { id: 'socialNetwork_1', route: 'www.google.com', icon: 'google' },
                { id: 'socialNetwork_2', route: 'www.facebook.com', icon: 'FB' },
                { id: 'socialNetwork_3', route: 'www.instagram.com', icon: 'ig' }]}
        />
        <Parallax
            id="contact"
            titles={[{ prefix: 'Yo soy ', word: 'Edwin Obando' }, { prefix: 'Yo soy ', word: 'desarrollador' }, { prefix: 'Yo ❤️ ', word: 'Programar' }]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ex elementum lectus vehicula vestibulum. Donec commodo aliquet justo venenatis fermentum. In hac habitasse platea dictumst. Nulla non urna ut arcu auctor ultricies. Pellentesque finibus efficitur egestas. Donec tincidunt mi lorem, vitae placerat erat sagittis sit amet. Nunc leo lectus, fringilla non ipsum commodo, fringilla aliquam ipsum"
            socialNetworks={[
                { id: 'socialNetwork_1', route: 'www.google.com', icon: 'google' },
                { id: 'socialNetwork_2', route: 'www.facebook.com', icon: 'FB' },
                { id: 'socialNetwork_3', route: 'www.instagram.com', icon: 'ig' }]}
        />
    </>
);

export default HomePage;

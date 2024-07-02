const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3300;

let blogPost = [
    {
        id: 1,
        title: "The Impact of Artificial Intelligence on Modern Education: Revolutionizing Learning Experiences",
        content: "Artificial Intelligence (AI) is reshaping the educational landscape in unprecedented ways. From personalized learning experiences tailored to individual student needs to AI-driven tutoring systems, the integration of AI in education is creating more engaging and effective learning environments. Adaptive learning platforms use AI algorithms to identify students' strengths and weaknesses, providing customized content that enhances understanding and retention. AI is also aiding educators by automating administrative tasks, allowing them to focus more on teaching and student interaction. The future of education with AI looks promising, with potential innovations such as intelligent virtual classrooms and AI-based career counseling. However, the rapid adoption of AI also raises concerns about data privacy, the digital divide, and the need for educators to adapt to new technologies. This blog will explore these dynamics, highlighting the transformative potential of AI in education and the challenges that need to be addressed to fully harness its benefits.",
        author: "Mr. Scheffer Collins",
        date: new Date(),
    },
    {
        id: 2,
        title: "Sustainable Living: Practical Tips for Reducing Your Carbon Footprint and Protecting the Planet",
        content: "As the effects of climate change become increasingly apparent, adopting sustainable living practices is more crucial than ever. Reducing your carbon footprint involves making conscious choices in various aspects of daily life, from the food you consume to the energy you use. Simple actions like reducing meat consumption, opting for public transport, and minimizing waste can collectively make a significant impact. Energy-efficient appliances, solar panels, and smart home systems are great investments for reducing household emissions. This blog will delve into practical and achievable tips for individuals and families aiming to live more sustainably. It will also highlight inspiring stories of communities and organizations leading the way in environmental conservation. By making informed choices and advocating for systemic changes, we can all contribute to a healthier planet for future generations.",
        author: "Dr. Chinweike",
        date: "30-06-2024"
    },
    {
        id: 3,
        title: " Cybersecurity Best Practices for Remote Workers: Safeguarding Your Data in the Home Office",
        content: "The shift to remote work has brought numerous benefits, but it also poses significant cybersecurity challenges. With sensitive company data being accessed from home networks, the risk of cyberattacks has increased. This blog will provide comprehensive guidelines for remote workers to protect their data and maintain secure connections. Key practices include using Virtual Private Networks (VPNs) to encrypt internet traffic, implementing strong, unique passwords for all accounts, and enabling multi-factor authentication (MFA). Recognizing phishing attempts and ensuring regular software updates are also critical. Additionally, securing home Wi-Fi networks and backing up important data can prevent data loss and unauthorized access. By following these best practices, remote workers can significantly reduce the risk of cyber threats and ensure that their work environment remains secure, regardless of location.",
        author: "Engr. Akwolu Chinweike",
        date: "30-06-2024"
    },
    {
        id: 4,
        title: "Mental Health Awareness: Strategies for Managing Stress and Anxiety in a Fast-Paced World",
        content: "In today’s fast-paced and high-pressure society, stress and anxiety have become common challenges that affect mental health. This blog will discuss various strategies to manage and alleviate these mental health issues, emphasizing the importance of self-care and professional support. Mindfulness practices, such as meditation and yoga, can help reduce stress levels and improve emotional well-being. Regular physical activity, maintaining a balanced diet, and ensuring adequate sleep are essential for overall mental health. The blog will also explore the benefits of cognitive-behavioral therapy (CBT) and other therapeutic approaches for managing anxiety. Additionally, fostering strong social connections and seeking support from friends, family, or mental health professionals can provide much-needed relief. By adopting these strategies, individuals can build resilience, enhance their mental well-being, and lead more balanced and fulfilling lives.",
        author: "Nelson Carter",
        date: "30-05-2024"
    },
    {
        id: 5,
        title: "The Rise of Electric Vehicles: Benefits, Challenges, and the Future of Transportation",
        content: "Electric vehicles (EVs) are rapidly gaining popularity as a sustainable alternative to traditional gasoline-powered cars. This blog will explore the numerous benefits of EVs, including reduced greenhouse gas emissions, lower operating costs, and improved energy efficiency. It will also examine the advancements in EV technology, such as increased battery life, faster charging times, and the development of autonomous driving features. However, the widespread adoption of EVs faces several challenges, including the need for extensive charging infrastructure, high initial costs, and the environmental impact of battery production and disposal. The blog will discuss these challenges in detail and highlight the ongoing efforts to overcome them, such as government incentives, investments in renewable energy, and innovations in battery recycling. By understanding the benefits and addressing the challenges, we can pave the way for a cleaner, more sustainable future in transportation.",
        author: "Ken Riggs",
        date: "03-12-2023"
    }
];

let lastId = 5;

// Middlewares
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    console.log(blogPost);
    res.json(blogPost);
});

// Get a particular post by its id
app.get("/posts/:id", (req, res) => {
    const getId = blogPost.find((post) => post.id === parseInt(req.params.id));
    if (!getId) return res.status(404).json({message: "No post for the is"});
    res.json(getId);
})

// Create a new Post
app.post('/posts', (req, res)=> {
    const addId = lastId += 1;
    const post = {
        id: addId,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: new Date(),
    };
    lastId = addId;
    blogPost.push(post);
    res.status(201).json(post);
});

// PATCH a post
app.patch("/posts/:id", (req, res) => {
    const post = blogPost.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: error.message});

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.author) post.author = req.body.author;

    res.json(post);
})

app.listen(port, (req, res) => {
    console.log(port);
})
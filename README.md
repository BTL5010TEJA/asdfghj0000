# AgroSocialMedia 🌱

A modern social networking platform designed specifically for farmers to share knowledge, experiences, and collaborate on agricultural practices.

## Features ✨

- **Multi-language Support**: English, Hindi, Telugu, and Kannada
- **Real-time Weather Integration**: Location-based weather updates using OpenWeatherMap API
- **Smart Irrigation Planner**: Get personalized irrigation schedules based on crop type, soil, and weather
- **Harvest Readiness Checker**: Determine optimal harvest timing
- **Community Challenges**: Participate in farming contests and knowledge sharing
- **Dark/Light Theme**: Eye-friendly viewing experience
- **AI-powered Content Ranking**: Personalized feed based on your interests

## Technologies 🛠️

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **APIs**: OpenWeatherMap for weather data
- **Backend** (Optional): Firebase for authentication and data storage
- **Deployment**: Vercel/Netlify ready

## Getting Started 🚀

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/BTL5010TEJA/FARMER-SOCIAL-MEDIA.git
cd FARMER-SOCIAL-MEDIA
```

2. Configure API keys:
   - Open `firebase-config.js`
   - Add your OpenWeatherMap API key
   - (Optional) Add Firebase configuration

3. Start a local server:
```bash
npx http-server -p 3000 -o
```

4. Open `http://localhost:3000/farmer.html` in your browser


- `OPENWEATHER_API_KEY`: Your OpenWeatherMap API key

### Firebase Setup (Optional)

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication and Firestore
3. Copy your config to `firebase-config.js`

## File Structure 📁

```
├── farmer.html          # Main dashboard
├── irrigation.html      # Irrigation planner
├── harvest.html         # Harvest checker
├── community.html       # Community hub
├── photo.html           # Photo sharing
├── local.html           # Local farmers network
├── question.html        # Q&A section
├── share.html           # Advanced sharing interface
├── firebase-config.js   # API configuration
├── app.js              # Application logic
├── vercel.json         # Vercel deployment config
└── package.json        # Project metadata
```

## Browser Support 🌐

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

MIT License - see LICENSE file for details

## Author 👨‍💻

**Teja Lakshman**

- GitHub: [@BTL5010TEJA](https://github.com/BTL5010TEJA)

## Acknowledgments 🙏

- OpenWeatherMap for weather API
- Font Awesome for icons
- Unsplash for sample images

---

Made with ❤️ for farmers worldwide

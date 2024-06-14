function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
 // Function to set the volume of the video to a low level
        function setLowVolume() {
            const video = document.getElementById('video-30%');
            video.volume = 0.3; // Set the volume to 20% (you can adjust this value)
        }

        // Add an event listener to set the volume when the metadata is loaded
        document.getElementById('video-30%').addEventListener('loadedmetadata', setLowVolume);
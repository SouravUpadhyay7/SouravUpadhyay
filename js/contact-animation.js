// Three.js animation for Contact section
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if the contact section is in the current page
    if (!document.getElementById('contact-canvas')) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Get the contact canvas element
    const contactSection = document.getElementById('contact');
    const canvas = document.getElementById('contact-canvas');
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
    });
    
    // Set renderer size and append to DOM
    function updateRendererSize() {
        const width = contactSection.offsetWidth;
        const height = contactSection.offsetHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    
    updateRendererSize();
    canvas.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    // Fill with random positions and colors
    for (let i = 0; i < particlesCount * 3; i += 3) {
        // Positions - spread across a plane with some depth
        posArray[i] = (Math.random() - 0.5) * 10;
        posArray[i + 1] = (Math.random() - 0.5) * 10;
        posArray[i + 2] = (Math.random() - 0.5) * 3;
        
        // Colors - blue to purple gradient
        colorsArray[i] = Math.random() * 0.2;  // R
        colorsArray[i + 1] = Math.random() * 0.5 + 0.3;  // G
        colorsArray[i + 2] = Math.random() * 0.5 + 0.5;  // B
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    // Material with custom shader
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse interaction
    const mouse = {
        x: 0,
        y: 0
    };
    
    document.addEventListener('mousemove', (event) => {
        // Calculate mouse position relative to the contact section
        const rect = contactSection.getBoundingClientRect();
        if (
            event.clientX >= rect.left && 
            event.clientX <= rect.right && 
            event.clientY >= rect.top && 
            event.clientY <= rect.bottom
        ) {
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        }
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate particles
        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.001;
        
        // Respond to mouse movement
        particlesMesh.rotation.x += mouse.y * 0.001;
        particlesMesh.rotation.y += mouse.x * 0.001;
        
        // Update particles positions for wave effect
        const positions = particlesGeometry.attributes.position.array;
        const time = Date.now() * 0.0005;
        
        for (let i = 0; i < positions.length; i += 3) {
            // Create wave effect
            positions[i + 1] += Math.sin(time + positions[i] * 0.5) * 0.003;
        }
        
        particlesGeometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    window.addEventListener('resize', updateRendererSize);
    
    // Start animation
    animate();
});
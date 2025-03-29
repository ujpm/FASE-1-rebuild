class TestimonialsSection {
    constructor() {
        this.testimonials = [
            {
                name: 'Sarah Johnson',
                role: 'Emergency Response Team Leader',
                image: 'assets/testimonials/sarah.jpg',
                quote: 'FASE-1\'s training program transformed our team\'s emergency response capabilities. The practical scenarios and hands-on approach made a real difference.',
                rating: 5
            },
            {
                name: 'Dr. Michael Chen',
                role: 'Hospital Director',
                image: 'assets/testimonials/michael.jpg',
                quote: 'As a medical professional, I highly recommend FASE-1. Their comprehensive first aid education aligns perfectly with modern healthcare standards.',
                rating: 5
            },
            {
                name: 'Emma Rodriguez',
                role: 'School Teacher',
                image: 'assets/testimonials/emma.jpg',
                quote: 'The knowledge I gained from FASE-1 helped me handle a real emergency in my classroom. Every educator should take this training.',
                rating: 5
            }
        ];
    }

    createStarRating(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<i class="fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}"></i>`;
        }
        return stars;
    }

    render() {
        const section = document.createElement('section');
        section.className = 'testimonials-section py-5';
        section.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';

        // Add custom styles
        const style = document.createElement('style');
        style.textContent = `
            .testimonial-card {
                transition: all 0.3s ease-in-out;
            }
            .testimonial-card .card {
                border: none;
                background: #fff;
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                transition: all 0.3s ease-in-out;
            }
            .testimonial-card:hover .card {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }
            .testimonial-image img {
                border: 3px solid #f8f9fa;
                padding: 3px;
                transition: all 0.3s ease-in-out;
            }
            .testimonial-card:hover .testimonial-image img {
                transform: scale(1.05);
            }
            .testimonial-quote {
                font-style: italic;
                color: #6c757d;
                line-height: 1.6;
            }
        `;
        document.head.appendChild(style);

        const container = document.createElement('div');
        container.className = 'container';

        // Section header
        const header = document.createElement('div');
        header.className = 'text-center mb-5';
        header.innerHTML = `
            <h2 class="display-4 fw-bold mb-3">What People Say</h2>
            <p class="lead text-muted">Real experiences from our community members</p>
        `;
        container.appendChild(header);

        // Testimonials row
        const row = document.createElement('div');
        row.className = 'row g-4';

        this.testimonials.forEach((testimonial, index) => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';
            col.innerHTML = `
                <div class="testimonial-card" data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-delay="${index * 200}">
                    <div class="card h-100">
                        <div class="card-body p-4">
                            <div class="testimonial-image mb-4">
                                <img src="${testimonial.image}" alt="${testimonial.name}" 
                                     class="rounded-circle mx-auto d-block" width="80" height="80"
                                     onerror="this.src='assets/default-avatar.png'">
                            </div>
                            <div class="testimonial-rating mb-3 text-center">
                                ${this.createStarRating(testimonial.rating)}
                            </div>
                            <p class="testimonial-quote mb-4 text-center">"${testimonial.quote}"</p>
                            <div class="text-center">
                                <h5 class="testimonial-name mb-1 fw-bold">${testimonial.name}</h5>
                                <p class="testimonial-role text-muted small">${testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        container.appendChild(row);
        section.appendChild(container);
        return section;
    }
}

// Export the component
window.TestimonialsSection = TestimonialsSection;

"use client"
import React, { useRef, useEffect } from 'react';

const BallAnimation = ({ Blur }) => {
    const canvasRef = useRef(null);
    const numBalls = 6;
    const maxVelocity = 5; // Maximum velocity in pixels per frame
    const maxRadius = 80; // Maximum ball radius in pixels
    const speed = 0.5; // Speed factor, adjust this value to control the speed

    const generateRandomBall = () => {
        if (typeof window === 'undefined') {
            // Handle server-side rendering or non-browser environment
            return {
                x: 0,
                y: 0,
                dx: 0,
                dy: 0,
                radius: Math.random() * maxRadius + 20,
                color: 'black',
            };
        }

        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            dx: (Math.random() - 0.5) * maxVelocity * 2 * speed, // Apply speed factor to the velocity
            dy: (Math.random() - 0.5) * maxVelocity * 2 * speed, // Apply speed factor to the velocity
            radius: Math.random() * maxRadius + 20, // Minimum radius set to 20 pixels
            color: 'black',
        };
    };

    const balls = Array.from({ length: numBalls }, () => generateRandomBall());

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const animateBalls = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            for (let ball of balls) {
                ball.x += ball.dx;
                ball.y += ball.dy;

                if (ball.x + ball.radius >= canvasWidth || ball.x - ball.radius <= 0) {
                    ball.dx = -ball.dx;
                }

                if (ball.y + ball.radius >= canvasHeight || ball.y - ball.radius <= 0) {
                    ball.dy = -ball.dy;
                }

                drawBall(ctx, ball, Blur, '#494955', '#141414');
                // drawBall(ctx, ball, parseInt(Blur)-40, '#494955', '#141414');
            }

            requestAnimationFrame(animateBalls);
        };

        const drawBall = (ctx, ball, blurBall, colorOne, colorTwo) => {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);

            // Apply gradient background
            const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius);
            gradient.addColorStop(0, colorOne);
            gradient.addColorStop(1, colorOne);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.closePath();

            // Apply blur effect
            ctx.filter = `blur(${blurBall}px)`;
        };

        animateBalls();
        return () => {
            cancelAnimationFrame(animateBalls);
        };
    }, []);

    return <canvas ref={canvasRef} width={800} height={600} style={{ border: '0px' }} />;
};

export default BallAnimation;
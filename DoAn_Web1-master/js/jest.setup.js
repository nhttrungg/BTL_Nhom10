// jest.setup.js
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
    },
    writable: true
});

window.alert = jest.fn();
window.confirm = jest.fn();
document.getElementById = jest.fn();
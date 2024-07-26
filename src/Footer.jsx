export default function Footer() {
    const now = new Date();
    const currentHour = now.getHours();
    const openHour = 9;
    const closedHour = 22;
    const isOpen = currentHour >= openHour && currentHour < closedHour;

    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>We are open until {closedHour}:00. Come visit us or order online</p>
                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    );
}

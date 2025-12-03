const DashboardStats = ({ total, upcoming, past }) => {

    return (
        <>
            <div className="dash-stats-container">
                <div>
                    <h3>Total Events</h3>
                    <p>{total}</p>
                </div>

                <div>
                    <h3>Upcoming Events</h3>
                    <p>{upcoming}</p>
                </div>

                <div>
                    <h3>Past Events</h3>
                    <p>{past}</p>
                </div>
            </div>
        </>
    )
}

export default DashboardStats
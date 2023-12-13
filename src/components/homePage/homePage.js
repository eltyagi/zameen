import './homePage.css';


function Homepage() {
const date = new Date();
  return (
    <div className="homepage">
        <div className = 'dashboard'>
            <div className = 'dashboard-header'>
                <div className = 'header-text'>
                    Dashboard
                </div>
                <div className = 'header-sub-text'>
                    01 Jan 2023, Monday
                </div>
            </div>
            <div className = 'hr-line'></div>

            <div className = 'dashboard-view'>
                <div className = 'row-1'>
                    <div className = 'overview-view'>
                        <div className = 'view-title'>
                            Overview
                        </div>
                        <div className = 'blocks'>
                            <div className = 'block-1'>

                            </div>
                            <div className = 'block-2'>

                            </div>
                            <div className = 'block-3'>

                            </div>
                        </div>
                    </div>
                    <div className = 'asset-overview-view'>
                        <div className = 'view-title'>
                            Asset Overview
                        </div>
                        <div className = 'table-1'>

                        </div>
                    </div>
                </div>
                <div className = 'row-2'>
                    <div className = 'notification-view'>
                        <div className = 'view-title'>
                            Notifications
                        </div>
                        <div className = 'table-2'>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>


      
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Overlock&display=swap" rel="stylesheet"/>


    </div>
  );
}

export default Homepage;

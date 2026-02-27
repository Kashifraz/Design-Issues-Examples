                 <div>
                  <span style={{
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    background: application.status === 'submitted' ? '#fff3cd' : 
                               application.status === 'accepted' ? '#d4edda' : 
                               application.status === 'rejected' ? '#f8d7da' : '#e7f1ff',
                    color: application.status === 'submitted' ? '#856404' : 
                           application.status === 'accepted' ? '#155724' : 
                           application.status === 'rejected' ? '#721c24' : '#004085'
                  }}>
                    {application.status}
                  </span>
                </div>

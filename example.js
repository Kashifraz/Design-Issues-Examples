
public OrderResponse(Long id, String orderNumber, Order.OrderStatus status, BigDecimal subtotal, 
                        BigDecimal taxAmount, BigDecimal shippingAmount, BigDecimal totalAmount, 
                        Order.PaymentStatus paymentStatus, String paymentMethod, String paymentIntentId, 
                        AddressResponse shippingAddress, AddressResponse billingAddress, String notes, 
                        int totalItems, LocalDateTime createdAt, LocalDateTime updatedAt, 
                        List<OrderItemResponse> orderItems, Long userId, String userEmail, String userName) {
        ...
        ...
    }
    

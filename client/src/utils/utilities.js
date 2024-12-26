const getCategoryName = (category) => {
    switch (category) {
        case "AoNu":
            return "Áo nữ";
        case "AoNam":
            return "Áo nam";
        case "QuanVayNu":
            return "Quần / Váy nữ";
        case "QuanNam":
            return "Quần nam";
        case "PhuKien":
            return "Phụ kiện";
        default:
            return category;
    }
};

const getStatusName = (status) => {
    switch (status) {
		case 'waiting for confirmation':
		    return 'Đang chờ xác nhận';
		case 'shipping_paid':
			return 'Đơn hàng Zalopay đang vận chuyển đã thanh toán';
		case 'shipping':
			return 'Đơn hàng COD đang vận chuyển'
		case 'shipping_unpaid':
			return 'Đơn hàng Zalopay đang vận chuyển chưa thanh toán'
		case 'delivered':
			return 'Đã giao';
		case 'cancelled':
			return 'Đã hủy';
		case 'paid':
			return 'Đã thanh toán';
		case 'waiting for payment':
			return 'Đang chờ thanh toán';
		default:
			return status;
    }
};

export { getCategoryName, getStatusName };

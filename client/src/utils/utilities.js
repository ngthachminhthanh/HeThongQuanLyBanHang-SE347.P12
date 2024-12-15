const getCategoryName = (category) => {
	switch (category) {
		case 'AoNu':
		    return 'Áo nữ';
		case 'AoNam':
			return 'Áo nam';
		case 'QuanVayNu':
			return 'Quần / Váy nữ';
		case 'QuanNam':
			return 'Quần nam';
		case 'PhuKien':
			return 'Phụ kiện';
		default:
			return category;
	}
};

export { getCategoryName };
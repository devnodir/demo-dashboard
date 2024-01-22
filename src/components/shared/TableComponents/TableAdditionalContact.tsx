import { phoneFormatter } from '@/utils/formatter'
import React from 'react'
import { FaEnvelope, FaPhone, FaTelegram } from 'react-icons/fa6'

const TableAdditionalContact = (additional_contact: any[]) => {
	return additional_contact
		.map((item, index) => {
			switch (item.type) {
				case "phone_number":
					return <p className="d-flex align-items-center" key={index}>
						<FaPhone className="mr-2" />
						{phoneFormatter(item.value)}
					</p>
				case "email":
					return <p className="d-flex align-items-center" key={index}>
						<FaEnvelope className="mr-2" />
						{phoneFormatter(item.value)}
					</p>
				case "telegram":
					return <p className="d-flex align-items-center" key={index}>
						<FaTelegram className="mr-2" />
						{phoneFormatter(item.value)}
					</p>
			}
		})
}

export default TableAdditionalContact
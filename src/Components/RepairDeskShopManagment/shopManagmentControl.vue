<script setup>
import { ref } from 'vue';
import ShopManagment from '@/Components/RepairDeskShopManagment/shop-managment.vue';


const iconsList = ref([
    {
        title: 'Inventory Managment',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104539/InventoryManagement.svg',
    },
    {
        title: 'Integrated Payments',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104533/IntegratedPayments.svg',
    },
    {
        title: 'Appoinment Scheduling',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104515/AppointmentsScheduling.svg',
    },
    {
        title: 'Point of Sale Software',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104545/POS.svg'
    },
    {
        title: 'SMS and Email Notification',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104557/SMSandEmail-Notification.svg',
    },
    {
        title: 'Employee Managment',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104527/EmployeeManagement.svg'
    },
    {
        title: 'Bussines Reporting',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104524/BusinessReportingwhite.svg',
    },
    {
        title: 'Repair Ticket Managment',
        url: 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/03104551/RepairTicket-Management.svg',
    }
])

const currentIndex = ref(0);

</script>

<template>
    <div class="min-h-[240] max-h-auto w-full bg-[#FAF9E3]">
        <!-- hoverable container -->
        <div class="flex flex-col justify-center">
            <h1 class="text-center text-[42px] text-[#333333] font-[500] mt-13 mb-8">Repair Shop Managment Control
            </h1>
            <h3 class="text-[#000000] text-center text-[25px]">One feature-rich platform to consolidate, streamline,
                and manage your repair business operations.</h3>
        </div>
        <div class="flex gap-15 mt-10 flex-row w-full h-auto justify-center">
            <div v-for="(icons, index) in iconsList" :key="index" @mouseenter="currentIndex = index"
                class="group cursor-pointer flex flex-col items-center justify-center">
                <img class="h-7 hover:underline underline-offset-2 group-hover:scale-x-100" :src="icons.url" />
                <p
                    class="hover:w-[112px] hover:font-bold text-[#134E4A] mt-4 text-wrap w-[110px] text-center font-medium">
                    {{ icons.title }}</p>
            </div>
        </div>
        <div v-if="currentIndex === 0">
            <div>
                <ShopManagment title="Inventory Management"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112840/Inventory-Management.webp"
                    description="Make inventory management effortless with RepairDesk’s powerful inventory management software that simplifies inventory tracking, ordering, and replenishment. Easily create a serialized inventory, Purchase Orders and GRNs, transfer your inventory from one store to another and perform inventory counts. With user-friendly features and detailed reporting tools monitor stock levels, receive alerts for low inventory, and automate reorder processes for seamless inventory control." />
            </div>
        </div>
        <div v-else-if="currentIndex === 1">
            <div>
                <ShopManagment title="Integrated Payments"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112834/Integrated-Payments.webp"
                    description="Streamline billing and make payment collection from customers smooth, transparent and secure with multiple integrated payment methods. Accept debit, credit, contactless, online or digital wallet payments through RD Payment widget, Square, Paypal, Stripe and more. Track partial payments, and overdue invoices and create quotes, invoices and receipts in seconds. Email invoices to customers and enjoy end-to-end encryption and PCI compliance, making collecting payments a super simple process." />
            </div>
        </div>
        <div v-else-if="currentIndex === 2">
            <div>
                <ShopManagment title="Appointment Scheduling"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112819/Appointments-Scheduling.webp"
                    description="Convert your website visitors to customers with the RepairDesk online appointments module. The innovative feature makes it very easy for your customers to book appointments anytime. With customizable options and an intuitive interface, easily schedule, reschedule, and track appointments in real time. Stay organized and enhance customer experience with automated reminders and notifications. With RepairDesk`s appointments scheduling feature take control of your schedule today." />
            </div>
        </div>
        <div v-else-if="currentIndex === 3">
            <div>
                <ShopManagment title="Point of Sale"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/07045942/POS-2.webp"
                    description="Generate more revenue and provide a great checkout experience to your customers with a comprehensive POS software that has everything you need for your business operations. Sell more repair services, accessories and gadgets, generate and print invoices, collect payments, and more – all from a single POS system screen. RepairDesk Point of sale software is fast, efficient, reliable, and tailor-made for your store’s workflow." />
            </div>
        </div>
        <div v-else-if="currentIndex === 4">
            <div>
                <ShopManagment title="SMS and Email Notification"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112855/SMS-and-Email-Notification.webp"
                    description="Stay connected with your customers effortlessly using RepairDesk`s SMS and email notification feature. Instantly send automated updates, reminders, and notifications to keep customers informed every step of the way. Customize messages to reflect your brand and improve communication efficiency. With real-time alerts and personalized touches, enhance customer satisfaction and streamline your repair process. Take your customer service to the next level." />
            </div>
        </div>
        <div v-else-if="currentIndex === 5">
            <div>
                <ShopManagment title="Employee Management"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112829/Employee-Management-1.webp"
                    description="Manage your repair shop efficiently with an employee management system that lets you assign tasks, set distinctive roles and permissions for employees, record shift start and end times, actively track work progress, and monitor productivity with ease. With customizable options and real-time updates features in your repair service management software, you can keep an eye on sales generated by each employee and optimize your team`s efficiency to drive success." />
            </div>
        </div>
        <div v-else-if="currentIndex === 6">
            <div>
                <ShopManagment title="Business Reporting"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112823/Business-Reporting.webp"
                    description="Gain invaluable insights into your repair business with RepairDesk`s powerful reporting software. The comprehensive reporting tools allow you to track key metrics, analyze performance, and make data-driven decisions with ease. Customize reports with repair management system to suit your needs and monitor trends over days, weeks and months. With intuitive visualization and real-time data access, optimize your operations and drive growth. Elevate your repair business with RepairDesk`s robust reporting feature today." />
            </div>
        </div>
        <div v-else-if="currentIndex === 7">
            <div>
                <ShopManagment title="Repair Ticket Management"
                    img="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08112850/Repair-Ticket-Management.webp"
                    description="With RepairDesk intuitive repair ticket management software you can easily create tickets, add parts, complete a pre- & post repair checklists, get customer signatures and assign tickets to technicians. The powerful repair ticket software allows you to access customer information and repair history with ease, track tickets and monitor job progress. Resolve tickets with every successful delivery to increase the efficiency of your shop operations." />
            </div>
        </div>
        <!-- Container to be change -->

    </div>
</template>
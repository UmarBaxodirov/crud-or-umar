const AddBtn = document.getElementById('add_btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const Btn = document.getElementById('btn');
const tbody = document.getElementById('tbody');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const btn20 = document.getElementById('btn6');

Btn.addEventListener('click', () => {
  // Example calculation of percentage (replace with your actual logic)
  const percentage = Math.floor(Math.random() * 100); // Random percentage between 0 and 100
  const status = percentage >= 50 ? 'Pass' : 'Fail';

  tbody.innerHTML += `
        <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                55
            </th>
            <td class="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                ${Email.value}
            </td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                ${getCurrentDateTime()} <!-- Replace with actual date/time -->
            </td>
            <td class="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                ${percentage}%
            </td>
            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                <button class="pr-[20px] pl-[20px] ml-[-10px] pt-[7px] pb-[7px] ${status === 'Pass' ? 'bg-lime-500' : 'bg-red-500'} rounded-[20px]">
                    <p class="text-[white]">${status}</p>
                </button>
            </td>
            <th scope="col" class="pl-[10px] pr-[10px] pt-[10px] px-6 py-3 bg-gray-50 dark:bg-gray-800">
                <button  class="bg-slate-300 hover:bg-slate-400 pr-[10px] ml-[10px] rounded pt-[10px] pb-[10px] hover:text-[white]">
                    <i class="fa-solid fa-pencil ml-[10px]"></i>
                </button>
            </th>
            <th scope="col" class="pl-[10px] pr-[10px] pt-[10px] px-6 py-3 bg-gray-50 dark:bg-gray-800">
                <button class="bg-slate-300 hover:bg-slate-400 pr-[10px] ml-[10px] rounded pt-[10px] pb-[10px] hover:text-[white]">
                    <i class="fa-solid fa-trash ml-[10px]"></i>
                </button>
            </th>
        </tr>
    `;

  // Clear email and password fields after adding the row
  Email.value = '';
  Password.value = '';

  // Toggle modal visibility
  modal.classList.toggle('hidden');
});

// Function to get current date and time (replace with your actual logic)
function getCurrentDateTime() {
  const now = new Date();
  const formattedDate = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}:${now.getHours()}:${now.getMinutes()}`;
  return formattedDate;
}

// Event listener to toggle modal visibility on AddBtn and closeBtn click
AddBtn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  modal.value = ''
});

// Event listener to toggle modal visibility on Btn click
Btn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});
const percentage = Math.floor(Math.random() * 100);
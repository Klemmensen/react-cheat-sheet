export const example =
`const [contactFormData, setContactFormData] = useState({
    name: '',
    company: '',
    'area-of-interest': '',
    newsletter: true,
});

const onClickSubmit = (e) => {
    e.preventDefault();
    // Post data somewhere
    console.log('Form is submitted, values:');
    console.log(contactFormData);
    console.log('');
}

const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setContactFormData({
        ...contactFormData, [e.target.name]: value
    });
};

<h2>Contact form example</h2>
<div className="contact-grid">
    <div>
        <details>
            <summary>Contact form example code</summary>
            <div>
                <code>

                </code>
            </div>
        </details>
    </div>
    <div>
        <form onSubmit={onClickSubmit}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                placeholder="Type your name here.."
                value={contactFormData.name}
                onChange={handleChange} />
            <br /><br />
            <label>Company:</label>
            <input
                type="text"
                name="company"
                placeholder="Type your company here.."
                value={contactFormData.company}
                onChange={handleChange} />
            <br /><br />
            <label>Area of interest:</label>
            <select
                name="area-of-interest"
                value={contactFormData.areaOfInterest}
                onChange={handleChange}>
                <option value="marketing">Marketing</option>
                <option value="development">Development</option>
            </select>
            <br /><br />
            <label>
                <input
                    type="checkbox"
                    name="newsletter"
                    checked={contactFormData.newsletter}
                    onChange={handleChange} /> Sign up for newsletter
            </label>
            <br /><br />
            <input type="submit" name="submit" value="SEND" />
        </form>
    </div>
</div>`;

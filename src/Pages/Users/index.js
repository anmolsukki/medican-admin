import React from 'react';
import './index.scss';

const Users = () => {
  return (
    <div id="dashboard-wrapper">
      <input type="file" className="mb-3 float-right text-white" />
      <table>
        <thead>
          <tr>
            <th width="8%" scope="col">
              Seq
            </th>
            <th scope="col">Item Code</th>
            <th scope="col">Item & Name</th>
            <th width="13%" scope="col">
              Mfg. Name
            </th>
            <th scope="col">Group</th>
            <th scope="col">Pack Type</th>
            <th scope="col">Packing</th>
            <th scope="col">Category</th>
            <th scope="col">Content</th>
            <th scope="col">Mrp Box</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">01</td>
            <td data-label="Due Date">I00029</td>
            <td data-label="Amount">NOOTROPIL 1200MG TAB</td>
            <td data-label="Period">UNICHEM LAB (NEU FOREVA)</td>
            <td data-label="Period">STRIPS</td>
            <td data-label="Period">STRIPS</td>
            <td data-label="Period">10'S</td>
            <td data-label="Period">-</td>
            <td data-label="Period">-</td>
            <td data-label="Period">209.25</td>
          </tr>
          <tr>
            <td data-label="Account">02</td>
            <td data-label="Due Date">129130</td>
            <td data-label="Amount">OFLIN 200MG TAB</td>
            <td data-label="Period">ZYDUS PHARMACEUTICALS LTD</td>
            <td data-label="Period">TABLET.</td>
            <td data-label="Period">STRIPS</td>
            <td data-label="Period">10`S</td>
            <td data-label="Period">TABLET</td>
            <td data-label="Period">OFLOXACIN</td>
            <td data-label="Period">62.3</td>
          </tr>
          <tr>
            <td data-label="Account">03</td>
            <td data-label="Due Date">130876</td>
            <td data-label="Amount">OMEZ DSR CAP 15'S</td>
            <td data-label="Period">DR REDDY'S LAB (AQURA SG)</td>
            <td data-label="Period">CAPSULES.</td>
            <td data-label="Period">STRIPS</td>
            <td data-label="Period">15'S</td>
            <td data-label="Period">SWALLOW</td>
            <td data-label="Period">DOMPERIDONE + OMEPRAZOLE</td>
            <td data-label="Period">127.5</td>
          </tr>
          <tr>
            <td data-label="Account">04</td>
            <td data-label="Due Date">092965</td>
            <td data-label="Amount">ISITE CAP</td>
            <td data-label="Period">SUN</td>
            <td data-label="Period">CAPSULES</td>
            <td data-label="Period">STRIPS</td>
            <td data-label="Period">10'S</td>
            <td data-label="Period">SWALLOW</td>
            <td data-label="Period">CAROTENOIDS + MINERALS + VITAMINS</td>
            <td data-label="Period">175</td>
          </tr>
          <tr>
            <td data-label="Account">05</td>
            <td data-label="Due Date">I00696</td>
            <td data-label="Amount">COLGATE SPIDER-MAN PEST* 80GM</td>
            <td data-label="Period">COLGATE PALMOLIVE INDIA LTD FMCG</td>
            <td data-label="Period">-</td>
            <td data-label="Period">-</td>
            <td data-label="Period">1'S</td>
            <td data-label="Period">-</td>
            <td data-label="Period">-</td>
            <td data-label="Period">79</td>
          </tr>
          <tr>
            <td data-label="Account">06</td>
            <td data-label="Due Date">139035</td>
            <td data-label="Amount">PHEXIN DRY SYP 30ML</td>
            <td data-label="Period">GLAXO SMITHKLINE (TEAM 1 ENTEROPLUS)</td>
            <td data-label="Period">SYRUP</td>
            <td data-label="Period">BOTTLE</td>
            <td data-label="Period">30ML</td>
            <td data-label="Period">DRINK</td>
            <td data-label="Period">CEPHALEXIN (CEFALEXIN)</td>
            <td data-label="Period">95.05</td>
          </tr>
          <tr>
            <td data-label="Account">07</td>
            <td data-label="Due Date">I00062</td>
            <td data-label="Amount">SHELCAL HD 12 TAB</td>
            <td data-label="Period">ELDER PHARMACEUTICALS LTD</td>
            <td data-label="Period">TABLET</td>
            <td data-label="Period">STRIPS</td>
            <td data-label="Period">15'S</td>
            <td data-label="Period">-</td>
            <td data-label="Period">LYNESTRENOL</td>
            <td data-label="Period">106.6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
